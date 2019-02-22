<template>
  <div class="layout">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <g-link class="navbar-brand" to="/">{{ $static.metaData.siteName }} </g-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">

          <li class="nav-item active">
            <g-link class="nav-item nav-link" to="/">Home</g-link>
          </li>
          <li class="nav-item">
            <g-link class="nav-item nav-link" to="/about">About</g-link>
          </li>
        </ul>
      </div>
    </nav>

    <slot/>
    
  </div>
</template>

<static-query>
  query {
    metaData {
      siteName
    }
}
</static-query>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}
</style>
