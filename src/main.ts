// Get all image tags on the page
const images: HTMLCollectionOf<HTMLImageElement> = document.getElementsByTagName('img')

// Create a ul list to contain the images
const list = document.createElement('ul')

// Iterate through the images
for (let i = 0; i < images.length; i++) {
  const image = images[i]
  const fileExtension = image.src.split('.').pop()

  // Create an li element for each image
  const listItem = document.createElement('li')

  // Create a div to contain the image and the button
  const container = document.createElement('div')

  // Create an img element inside the div and set the image source
  const imgElement = document.createElement('img')
  imgElement.src = image.src

  // Create a download button
  const downloadButton = document.createElement('button')
  downloadButton.textContent = 'Download'
  downloadButton.addEventListener('click', () => {
    if (typeof fileExtension === 'string') {
      downloadImage(image.src, i, fileExtension)
    }
  })

  // Add the image and the button to the div
  container.appendChild(imgElement)
  container.appendChild(downloadButton)

  // Add the div to the li element
  listItem.appendChild(container)

  // Add the li element to the list
  list.appendChild(listItem)
}

// Add the list to the document body (or any other element where you want to display it)
document.body.appendChild(list)

function downloadImage(src: string, index: number, extension: string): void {
  // Create a temporary link
  const link = document.createElement('a')
  link.href = src
  link.download = `image_${index + 1}.${extension}`
  link.target = '_blank'

  // Add the link to the document body
  document.body.appendChild(link)

  // Simulate a click on the link to initiate the download
  link.click()

  // Remove the link after the download
  document.body.removeChild(link)
}
