<template>
	<view class="my">
		<alreadylist :sendsonglist='mysonglist'></alreadylist>
	</view>
</template>

<script>
  import alreadylist from '@/components/mylist.vue'
	export default {
		data() {
			return {
			};
		},
    computed:{
      mysonglist(){
        return this.$store.state.mysonglist
      }
    },
    components:{
      alreadylist
    }
	}
</script>

<style lang="scss">
.my{
  width: 100%;
  height: 100%;
  padding:10upx;
  box-sizing:border-box;
  color:white;
}
</style>
