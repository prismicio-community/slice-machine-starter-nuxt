import MyComponent from '../../../../slices/Jknjn';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Jknjn'
}


export const _DefaultSlice = () => ({
  components: {
    MyComponent,
    SliceZone
  },
  methods: {
    resolve() {
      return MyComponent
    }
  },
  data() {
    return {
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"jknjn","items":[],"primary":{"title":[{"type":"heading1","text":"E-enable synergistic web services","spans":[]}],"description":[{"type":"paragraph","text":"Irure fugiat elit velit non voluptate laborum reprehenderit laborum et veniam sint velit. Voluptate tempor aliqua aliqua magna aute qui cupidatat ex adipisicing eu cupidatat minim.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
