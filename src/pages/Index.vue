<template>
  <Layout>

    <div class="Hero container-fluid">
      <h1>Hey My name is KeegyBoi</h1>
      <p>I'm graduated</p>
    </div>

    <div class="Portfolio container" >
      <h3> Portfolio Works</h3>

      <div class="row">

        <div class ="Work-Container col-md-6" v-for="work in $page.allWork.edges" :key="work.id">
          <g-link :to="work.node.path">
            <div class = "Work">
              <img class = "Work-Image" src="https://via.placeholder.com/200x180.png?text=Visit+WhoIsHostingThis.com">
              <div class="Work-Content">
                <h3 class=Work-Title> {{work.node.title}} </h3>
                <p class=Work-Description>{{work.node.description}} </p>
              </div>
            </div>
          </g-link>

        </div>
      </div>

      </div>
    </div>

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<page-query>
  query Work {
    allWork {
      edges {
        node {
          title
          path
          content
          description
        }
      }
    }
  }
</page-query>


<style lang="scss">
.Hero {
  padding: 10px 10px;
}

.Work {
  box-shadow: 0px 0px 20px rgba(0,0,0,0.1);
  &-Container {
    padding: 25px 15px
  }

  &-Content {
    padding: 10px 10px;
  }

  &-Image {
    width: 100%;
  }

  &:hover {
    box-shadow: 0px 0px 20px rgba(0,0,0,0.2);
  }
}


</style>
