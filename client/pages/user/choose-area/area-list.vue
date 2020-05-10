<template>
  <div>
    <van-nav-bar
      title="地址列表"
      left-text="返回"
      right-text=""
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      :disabled-list="disabledList"
      disabled-text="以下地址超出配送范围"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
    />
  </div>
</template>
<script>
  import { NavBar, AddressList, Toast } from 'vant';
  import cookie from 'js-cookie';
  import api from 'libjs/api';

  export default {
    name: 'AreaList',

    components: {
      [NavBar.name]: NavBar,
      [AddressList.name]: AddressList,
      [Toast.name]: Toast,
    },

    methods: {
      onClickLeft() {
        this.$router.back();
      },

      onClickRight() {},

      onAdd() {
        // Toast('新增地址');
        this.$router.push({
          path: '/home/user/addArea',
        });
      },

      onEdit(item, index) {
        this.$router.push({
          path: '/home/user/editArea',
          query: { id: item.id },
        });
      },
    },
    data() {
      return {
        chosenAddressId: '1',
        list: [],
        disabledList: [
          {
            id: '3',
            name: '王五',
            tel: '1320000000',
            address: '浙江省杭州市滨江区江南大道 15 号',
          },
        ],
      };
    },

    created() {
      const userInfo_userId = JSON.parse(cookie.get('jscookieTest')).user_id;
      api
        .get('/mobile/user/getArea', {
          params: {
            user_id: userInfo_userId,
          },
        })
        .then(res => {
          this.list = res.data.data.map((item, index) => {
            item.isDefault = Number.parseInt(item.isDefault);

            if (item.isDefault === 1) {
              item.isDefault = true;
            } else {
              delete item.isDefault;
            }
            item.address = item.addressDetail;
            return item;
          });
        });
    },
  };
</script>
