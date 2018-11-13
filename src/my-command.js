import sketch from 'sketch/dom'
import UI from 'sketch/ui'

export default function addTrailingSpaceIntoText(context) {
  const doc = sketch.fromNative(context.document)
  const { selectedLayers } = doc

  if (selectedLayers.length === 0) {
    UI.message('No layers are selected.')
    return
  }

  let changedCount = 0

  selectedLayers.forEach(layer => {
    console.log(JSON.stringify(layer, null, '  '), sketch.Types)
    // not Text Layer
    if (layer.type !== String(sketch.Types.Text)) {
      return
    }
    // Already added a space
    if (/ $/.test(layer.text)) {
      return
    }

    // Add a space
    layer.text = `${layer.text} `
    changedCount += 1
  })

  if (changedCount > 0) {
    UI.message(`${changedCount} selected layers has been added a space.`)
  }
}
