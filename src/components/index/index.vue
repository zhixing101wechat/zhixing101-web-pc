<template>
  <div class="layout">
    <div class="header flex  align-c">
      <div class="logo"><img src="../../assets/logo.png" alt="知行101"></div>
      <div class="search">
        <div class="search-con">
          <form class="form-inline">
            <div class="form-group">
              <select class="form-control">
                <option>北京市</option>
                <option>天津市</option>
                <option>湖北省</option>
                <option>湖南省</option>
              </select>
            </div>
            <div class="form-group">
              <input type="text" class="form-control" id="bookName" placeholder="请输入书籍名称">
            </div>
            <button type="submit" class="btn btn-default">知行一下</button>
          </form>
        </div>
        <p></p>
      </div>
    </div>

    <!--存书点-->
    <div class="section-list flex">
      <div class="flex-1">
        <div class="book flex" @click="gotoPage">
          <figure><img src="../../assets/images/WX20170419-074117@2x.png" alt=""></figure>
          <div class="book-info">
            <h3>先锋书店</h3>
            <ol>
              <li>地址：北京市朝阳区花家地（社科大厦一楼）</li>
              <li>书箱总数：123 本</li>
              <li>可借书籍：123 本</li>
              <li>录入者：知行101</li>
              <li>备注信息：如果需要图书，请微信留言</li>
            </ol>
          </div>
        </div>
        <div class="book flex" @click="gotoPage">
          <figure><img src="../../assets/images/WX20170419-074117@2x.png" alt=""></figure>
          <div class="book-info">
            <h3>先锋书店</h3>
            <ol>
              <li>地址：北京市朝阳区花家地（社科大厦一楼）</li>
              <li>书箱总数：123 本</li>
              <li>可借书籍：123 本</li>
              <li>录入者：知行101</li>
              <li>备注信息：如果需要图书，请微信留言</li>
            </ol>
          </div>
        </div>
        <div class="book flex" @click="gotoPage">
          <figure><img src="../../assets/images/WX20170419-074117@2x.png" alt=""></figure>
          <div class="book-info">
            <h3>先锋书店</h3>
            <ol>
              <li>地址：北京市朝阳区花家地（社科大厦一楼）</li>
              <li>书箱总数：123 本</li>
              <li>可借书籍：123 本</li>
              <li>录入者：知行101</li>
              <li>备注信息：如果需要图书，请微信留言</li>
            </ol>
          </div>
        </div>
        <div class="book flex" @click="gotoPage">
          <figure><img src="../../assets/images/WX20170419-074117@2x.png" alt=""></figure>
          <div class="book-info">
            <h3>先锋书店</h3>
            <ol>
              <li>地址：北京市朝阳区花家地（社科大厦一楼）</li>
              <li>书箱总数：123 本</li>
              <li>可借书籍：123 本</li>
              <li>录入者：知行101</li>
              <li>备注信息：如果需要图书，请微信留言</li>
            </ol>
          </div>
        </div>
      </div>

      <div class="flex-1">
        <div class="book flex" @click="gotoPage">
          <figure><img src="../../assets/images/WX20170419-074117@2x.png" alt=""></figure>
          <div class="book-info">
            <h3>先锋书店</h3>
            <ol>
              <li>地址：北京市朝阳区花家地（社科大厦一楼）</li>
              <li>书箱总数：123 本</li>
              <li>可借书籍：123 本</li>
              <li>录入者：知行101</li>
              <li>备注信息：如果需要图书，请微信留言</li>
            </ol>
          </div>
        </div>
        <div class="book flex" @click="gotoPage">
          <figure><img src="../../assets/images/WX20170419-074117@2x.png" alt=""></figure>
          <div class="book-info">
            <h3>先锋书店</h3>
            <ol>
              <li>地址：北京市朝阳区花家地（社科大厦一楼）</li>
              <li>书箱总数：123 本</li>
              <li>可借书籍：123 本</li>
              <li>录入者：知行101</li>
              <li>备注信息：如果需要图书，请微信留言</li>
            </ol>
          </div>
        </div>
        <div class="book flex" @click="gotoPage">
          <figure><img src="../../assets/images/WX20170419-074117@2x.png" alt=""></figure>
          <div class="book-info">
            <h3>先锋书店</h3>
            <ol>
              <li>地址：北京市朝阳区花家地（社科大厦一楼）</li>
              <li>书箱总数：123 本</li>
              <li>可借书籍：123 本</li>
              <li>录入者：知行101</li>
              <li>备注信息：如果需要图书，请微信留言</li>
            </ol>
          </div>
        </div>
        <div class="book flex" @click="gotoPage">
          <figure><img src="../../assets/images/WX20170419-074117@2x.png" alt=""></figure>
          <div class="book-info">
            <h3>先锋书店</h3>
            <ol>
              <li>地址：北京市朝阳区花家地（社科大厦一楼）</li>
              <li>书箱总数：123 本</li>
              <li>可借书籍：123 本</li>
              <li>录入者：知行101</li>
              <li>备注信息：如果需要图书，请微信留言</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods:{
    gotoPage(){
        this.$router.push({path:'/store'})
    }
  }
}
</script>


<style lang="less" scoped>
  .header{
    padding: 10px 0;
    border-bottom: 2px solid #ddd;
    .logo{
      margin-right: 100px;
      width: 160px;
      img{
        width:100%;
      }
    }
    .search{
      select{
        min-width: 100px;
      }
      input{
        width: 250px;
      }
    }
  }

  .book{
    margin:15px 0 0 0;
    figure{
      margin-right:15px;
      width: 200px;
      height: 140px;
      overflow: hidden;
      img{
        width: 100%;
      }
    }
    .book-info{
      h3{
        margin: 0 0 10px 0;
        font-size: 20px;
      }
      ol li{
        line-height: 22px;
      }
    }
  }

</style>
