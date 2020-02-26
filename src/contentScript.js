let images = Array.from(document.querySelectorAll("img"));
let message = {
  images: []
}

images.forEach((image,index)=>{
  message.images.push({
    "src": image.src,
    "alt": image.alt
  })
})


const port = chrome.runtime.connect({
  name: "contentscript"
});

port.postMessage({"images": message.images});

