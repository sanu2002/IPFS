import { CID } from 'multiformats/cid';
import { sha256 } from 'multiformats/hashes/sha2';
import { createHelia } from 'helia';

const form = document.getElementById('submit');
const button = document.getElementById('btn');
const input = document.getElementById('in1');

const getbtn = document.getElementById('get');
const span = document.getElementById('result');

async function getData() {
  // Added event listener for the "Get" button
  getbtn.addEventListener('click', async () => {
    // Fetch the data from localStorage
    const result = localStorage.getItem('blockstore');
    
    // Check if there is data stored in localStorage
    if (result) {
      span.innerText = result; // Display the result
      span.className = 'green'; // Apply green class for correct retrieval
    } else {
      span.innerText = 'No data found.'; // If no data is found
      span.className = 'red'; // Apply red class for no data found
    }
  });
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const message = input.value;

  // Create a Helia node
  const node1 = await createHelia();

  // Encode the message
  const messageEncode = new TextEncoder().encode(message);
  const digest = await sha256.digest(messageEncode);

  // Create CID using SHA-256 codec (correct usage)
  const cid = CID.create(1, sha256.code, digest);

  // Put the block into the blockstore
  await node1.blockstore.put(cid, messageEncode);

  // Retrieve the block
  const block = await node1.blockstore.get(cid);
  const decoded = new TextDecoder().decode(block);

  // Store the decoded message in localStorage
  localStorage.setItem('blockstore', decoded);

  console.log(decoded, "Your decoded value is here");

  // Optional: disable button after upload
  button.disabled = true;
  input.value="";
});

// Call the getData function when the page loads
window.onload = () => {
  getData();  // Ensure get button functionality works after page load
};





// If your data will not pin for a period time then it will get deleted from the the buffer so to ensure your data is avaialble or not you need to pin the data everytime 
// or 
// Run a ipfs client for storing the data permanately 