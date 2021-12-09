const { readFile, writeFile } = require('fs');

console.log('Start');
readFile('./content/first.txt', 'utf-8',(err, result) => {
    if(err){
        console.log(err);
        return;
    } 
    // console.log(result);
    const first = result;

    readFile('./content/second.txt', 'utf-8', (err, result) => {
        if(err){
            console.log(err);
            return;
        } 
        // console.log(result);
        const second = result;

        writeFile('./content/result-async.txt', 
                    `here is the result ${first} ${second}`, 
                    (err, result) => {
                        if(err){
                            console.log(err);
                            return;
                        }
                        // console.log(result);
                        console.log('Task completed');
                    }
                    
        );

    })
});

console.log('Finished');

