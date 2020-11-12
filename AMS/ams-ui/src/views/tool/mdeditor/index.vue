<template>
  <div>
      <MdEditor :value="text" height="900px" />
  </div>
</template>

<script>
import MdEditor from "@/components/MdEditor";
const text_long = `
::: tip
  你可以点击 toolbar 中的 tip 来快速插入
:::

::: warning
  这是一段警告
:::

::: danger
这是一个危险警告
:::

::: tip 自定义标题
  你也可以自定义块中的标题
:::

::: danger STOP
  危险区域，禁止通行
:::
`;
export default {
  name: "MdEditorTest",
  components: { MdEditor },
  data() {
    return {
      text: text_long
    };
  }
};
</script>

<style>

</style>