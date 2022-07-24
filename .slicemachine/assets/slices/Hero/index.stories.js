import MyComponent from '../../../../slices/Hero';

export default {
  title: 'slices/Hero'
}


export const _Default = () => <MyComponent slice={{"variation":"default","name":"Default","slice_type":"hero","items":[{"buttonText":"cultivate viral applications","buttonLink":{"link_type":"Web","url":"https://prismic.io"}},{"buttonText":"strategize bricks-and-clicks web-readiness","buttonLink":{"link_type":"Web","url":"http://google.com"}}],"primary":{"headline":[{"type":"heading2","text":"Recontextualize collaborative e-services","spans":[]}],"content":[{"type":"paragraph","text":"Occaecat aliqua minim ad aliquip irure est.","spans":[]}]},"id":"_Default"}} />
_Default.storyName = 'Default'

export const _BgImage = () => <MyComponent slice={{"variation":"bgImage","name":"With Background Image","slice_type":"hero","items":[{"buttonLink":{"link_type":"Web","url":"http://google.com"},"buttonText":"implement killer models"},{"buttonLink":{"link_type":"Web","url":"https://slicemachine.dev"},"buttonText":"target back-end solutions"},{"buttonLink":{"link_type":"Web","url":"https://prismic.io"},"buttonText":"unleash robust solutions"}],"primary":{"headline":[{"type":"heading2","text":"Mesh bleeding-edge schemas","spans":[]}],"content":[{"type":"paragraph","text":"Fugiat pariatur ex amet duis duis. Laboris id consequat aliquip deserunt aute sint.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1484589065579-248aad0d8b13?w=900&h=500&fit=crop"}},"id":"_BgImage"}} />
_BgImage.storyName = 'With Background Image'
