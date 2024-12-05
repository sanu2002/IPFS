

About ipfs node 
---------------------

Take a look on ipfs pros and cons :- https://arcana-network.medium.com/ipfs-and-its-drawbacks-a97613331f08

<details>
  
  
  Note: js-ipfs deprecation - signposting over to Helia
        github:- https://github.com/ipfs/js-ipfs/issues/4336




  If your data will not pin for a period time then it will get deleted
    from the the buffer so to ensure your data is avaialble or not you need to pin the data everytime 

or  
Run a ipfs client for storing the data permanately

and 

For your application uses store your data in database or run a client 

</details>



What is ipfs ?
------------------------------------------------
<details>
IPFS is a decentralized protocol for storing and sharing files, data, applications, and websites. It’s designed to provide a resilient, censorship-resistant, and efficient way to access and distribute content. Here’s a breakdown of its key features:

        <details>
        1-> Decentralized: IPFS is a peer-to-peer (P2P) system, meaning   that data is stored and replicated across a network of nodes (computers) rather than relying on a central server.

        2-> Content-addressed: Files and data are identified by unique hashes (Content Identifiers or CIDs) rather than URLs or locations. This allows for efficient retrieval and caching of content.

        3->Distributed Hash Table (DHT): IPFS uses a DHT to store and       retrieve data. Each node in the network is responsible for storing a portion of the data and can retrieve it based on the CID.

        4->Resilience: With data stored across multiple nodes, IPFS provides built-in redundancy and fault tolerance. Even if some nodes go offline, the data remains accessible through other nodes.

        5->Censorship-resistant: As data is decentralized and stored across multiple nodes, it’s difficult for a single entity to censor or manipulate content.
        6->Scalable: IPFS is designed to handle large amounts of data and can efficiently distribute content to users.

        7->Public network: IPFS nodes broadcast their availability and the CIDs they store to publicly accessible DHTs, making it possible for anyone to access and verify the data.
        </details>

</details>



