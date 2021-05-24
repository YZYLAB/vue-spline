<template>
  <div>
      <div
        :style="{
          backgroundSize: 'cover',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }">
        <h1 :style="{ position: 'absolute', zIndex: 10
        , color: '#fff' }">
          Vue Spline Working
        </h1>
        <spline :scene=scenes.first />
      </div>
      <div
        :style="{
          backgroundSize: 'cover',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#111111',
          height: '100vh'
        }"
      >
        <h1 :style="{ position: 'absolute', zIndex: 1, color: 'white' }">
          Multiple Canvas elements working
        </h1>
        <spline :scene=scenes.second />
      </div>
    </div>
</template>

<script>
    import Spline from '../dist'
    import SCENE_1 from './scenes/scene1.json'
    import SCENE_2 from './scenes/scene2.json'
    export default {
        components: {
            Spline
        },
        data() {
            return {
                scenes: {
                    first: SCENE_1,
                    second: SCENE_2
                }
            }
        }
    }
    
</script>

<style>
</style>