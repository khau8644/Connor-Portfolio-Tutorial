<template>
  <Layout>
    <h1>{{$page.work.title}}</h1>
    <p>{{$page.work.description}}</p>

    <div class = "Content container">
        <div v-html = $page.work.content>
        </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'About us'
  }
}
</script>

<page-query>

    query Work ($path: String!) {
        work: work (path: $path) {
            title
            description
            content
        }
    }

</page-query>
