<!--
 * @Author: jontyy
 * @Date: 2020-05-10 13:35:31
 * @Description: 
 -->
<template>
  <div>
    <van-nav-bar
      title="增加地址"
      left-text="返回"
      right-text=""
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <van-address-edit
      :area-list="areaList"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      :address-info="addressInfo"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
  </div>
</template>
<script>
  import { NavBar, AddressEdit, Toast } from 'vant';
  import areaList from './area';
  import cookie from 'js-cookie';
  import api from 'libjs/api';

  export default {
    name: 'EditArea',

    components: {
      [AddressEdit.name]: AddressEdit,
      [NavBar.name]: NavBar,
      [Toast.name]: Toast,
    },

    methods: {
      onClickLeft() {
        this.$router.back();
      },

      onClickRight() {},

      onSave(res) {
        res.userInfo_userId = JSON.parse(cookie.get('jscookieTest')).user_id;
        res.id = this.$route.query.id;
        api.post('/mobile/user/updateArea', res).then(ress => {
          if (ress.data.code === 0) {
            this.$router.back();
          }
        });
      },

      onDelete() {
        this.$router.back();
      },

      onChangeDetail(val) {
        if (val) {
          this.searchResult = [
            {
              name: '黄龙万科中心',
              address: '杭州市西湖区',
            },
          ];
        } else {
          this.searchResult = [];
        }
      },
    },

    data() {
      return {
        areaList,

        searchResult: [],
        addressInfo: {},
      };
    },

    created() {
      api
        .get('/mobile/user/getOneArea', {
          params: {
            area_id: this.$route.query.id,
          },
        })
        .then(res => {
          this.addressInfo = res.data.data;
        });
    },
  };
</script>
