<tmeplate row>
  <q-list bordered>
    <q-item-section class="row items-start">{{ index + 1 }}. {{ item.message }}</q-item-section>
  </q-list>
  <q-separater/>
</tmeplate>

<script>
  export default {
    name : "MyComponent",
    props: ["item", "index"],
  };
</script>

<style>

</style>
