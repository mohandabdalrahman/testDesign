// const videoOneRecord = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('video one recorded')
//     }, 1500)
//     //reject('video one  rejected')
// })

// const videoTwoRecord = new Promise((resolve, reject) => {
//     resolve('video two recorded')
// })

// const videoThreeRecord = new Promise((resolve, reject) => {
//     resolve('video three recorded')
// })

// Promise.all([videoOneRecord, videoTwoRecord, videoThreeRecord])
//     .then(messages => {
//         console.log(messages)
//     }).catch(err => console.log(err))


// Promise.race([videoOneRecord, videoTwoRecord, videoThreeRecord])
//     .then(messages => {
//         console.log(messages)
//     }).catch(err => console.log(err))


// function makeRequest(location){
//     return new Promise((resolve,reject)=>{
//         console.log(`the locaion is ${location}`)
//         if(location === 'Egypt'){
//             resolve('good location')
//         }else{
//             reject('bad location')
//         }
//     })
// }

// function processRequest(response){
//     return new Promise((resolve,reject)=>{
//         console.log('processing response')
//         resolve(`extra information ${response}`)
//     })
// }

// makeRequest('Egypt').then(res=>console.log(res))
// .catch(err=>console.log(err))


// makeRequest('Egypt').then(response=>{
//     return processRequest(response)
// }).then(message => console.log(message))

// async function doWork(){
//     const response = await makeRequest('Egypt')
//     const message = await processRequest(response)
//     console.log(message)
// }

// doWork()