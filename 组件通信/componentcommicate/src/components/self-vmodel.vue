<template>
  <div>
      <input type="checkbox" :checked="checked" @change="onChange">
  </div>
</template>

<script>
export default {
    model:{
        prop:'checked',
        event:'change'
    },
    props:{
        checked:{
            type:Boolean
        }
    },
    data () {
        return {
            // isChecked:true
        }
    },
    methods:{
        onChange(v) {
         
            this.$emit('change',v.target.checked)
        }
    }

}
</script>

<style>

</style>