<template>
  <div>
    <!-- ここの nav はなぜか style で背景色指定しないといけない -->
    <nav class="uk-navbar-container" style="background-color: #ffa700;" uk-navbar>
      <div class="uk-navbar-left">
        <h2 class="uk-heading-medium">b1u3's site</h2>
      </div>
      <div class="uk-navbar-right">
        <span uk-icon="icon: menu; ratio: 2;" class="b1u3-menu"></span>
      </div>
    </nav>
    <router-link to="/">top</router-link><br>
    <router-link to="/todo">simple-todo</router-link><br>
    <router-link to="/now">now</router-link><br>
    <router-link to="/coindesk">bitcoin price index</router-link><br>
    <router-view name="default"></router-view>
  </div>
</template>

<script>
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

UIkit.use(Icons);

export default {
  name: 'app',
}
</script>

<style lang="less">
@import "../node_modules/uikit/src/less/uikit.less";

/*
fresh squeezed orange juice color palette
https://www.color-hex.com/color-palette/27319
*/

// ↑ 薄い
@orange1: #ffe8be;
@orange2: #ffc659;
@orange3: #ffb646;
@orange4: #ffa700;
@orange5: #ffed00;
// ↓ 濃い


.uk-heading-medium, .b1u3-menu {
  margin: 20px;
  color: #ffffff;
}

/*
.uk-navbar-left, .uk-navbar-right, .b1u3-menu, .uk-navbar-center {
  background-color: @orange4;
}
*/

nav.uk-navbar {
  background-color: @orange4;
}

</style>
