import './style.css'
// Get all image tags on the page
const images: HTMLCollectionOf<HTMLImageElement> = document.getElementsByTagName('img')

// Create a ul list to contain the images
const contain = document.createElement('div')
contain.classList.add('container')
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

  const svgContainer = document.createElement('div')
  svgContainer.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 24 24" fill="none">
          <path d="M12 12V19M12 19L9.75 16.6667M12 19L14.25 16.6667M6.6 17.8333C4.61178 17.8333 3 16.1917 3 14.1667C3 12.498 4.09438 11.0897 5.59198 10.6457C5.65562 10.6268 5.7 10.5675 5.7 10.5C5.7 7.46243 8.11766 5 11.1 5C14.0823 5 16.5 7.46243 16.5 10.5C16.5 10.5582 16.5536 10.6014 16.6094 10.5887C16.8638 10.5306 17.1284 10.5 17.4 10.5C19.3882 10.5 21 12.1416 21 14.1667C21 16.1917 19.3882 17.8333 17.4 17.8333" stroke="#464455" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
  `

  // Create a download button
  const downloadButton = document.createElement('button')
  downloadButton.appendChild(svgContainer)
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
contain.appendChild(list)
document.body.appendChild(contain)

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
