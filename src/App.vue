<template>
  <div>
    <!-- ここの nav はなぜか style で背景色指定しないといけない -->
    <nav class="uk-navbar-container" style="background-color: #ffa700;" uk-navbar>
      <div class="uk-navbar-left">
        <h2 class="uk-heading-medium">b1u3's site</h2>
      </div>
      <div class="uk-navbar-right">
        <ul class="uk-navbar-nav">
          <li>
            <a href="#" uk-icon="icon: menu; ratio: 2" style="color: #ffffff;"></a>
            <div class="uk-navbar-dropdown">
              <ul class="uk-nav uk-navbar-dropdown-nav">
                <li>
                  <router-link to="/">top</router-link>
                </li>
                <li>
                  <router-link to="/todo">simple-todo</router-link>
                </li>
                <li>
                  <router-link to="/now">now</router-link>
                </li>
                <li>
                  <router-link to="/coindesk">bitcoin price index</router-link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </nav>
    <div id="content">
      <router-view name="default"></router-view>
    </div>
  </div>
</template> 

<!-- vim のメモ
				expandtab : タブ入力をスペースに置き換え
				tabstop : タブ文字が占める幅
				shiftwidth : 数値
				softtabstop : 連続した空白に対して、タブキーやバックスペースキーでカーソルが動く幅
				autoindent : 改行時に前の行のインデントを継続する
				smartindent : 改行時に入力された行の末尾に合わせて次の行のインデントを増減する
-->

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
@white: #ffffff;
// ↓ 濃い

.uk-heading-medium,
.b1u3-menu {
  margin: 20px;
  color: @white;
}

#content {
  margin: 20px;
}

</style>

<script>
import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";

UIkit.use(Icons);

export default {
  name: "app"
};
</script>
