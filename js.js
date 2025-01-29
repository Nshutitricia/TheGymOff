function findSecretMessage(paragraph) {
    return paragraph.toLowerCase().replace(/\./g,'').split(' ').filter((char,i,arr) => arr.indexOf(char)!==i && arr.lastIndexOf(char)===i).join(' ')
  }
  console.log(findSecretMessage('This is a test. this test is fun.'))