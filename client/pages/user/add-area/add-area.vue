<!--
 * @Author: jontyy
 * @Date: 2020-05-10 10:33:55
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
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
  </div>
</template>
<script>
  import { NavBar, AddressEdit } from 'vant';
  import areaList from './area';
  import cookie from 'js-cookie';
  import api from 'libjs/api';

  export default {
    name: 'AddArea',

    components: {
      [AddressEdit.name]: AddressEdit,
      [NavBar.name]: NavBar,
    },

    methods: {
      onClickLeft() {
        this.$router.back();
      },

      onClickRight() {},

      onSave(res) {
        res.userInfo_userId = JSON.parse(cookie.get('jscookieTest')).user_id;
        api.post('/mobile/user/addArea', res).then(ress => {
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
      };
    },
  };
</script>
