const array = [1, 3, 4, 5, 6, 7, 8, 9, 0]

function sweepingArray(time = 1000) {
    return {
        start(array) {
            let num = 0;
            const t = setInterval(() => {
                console.log("numeros : " + array[num++])
                if (array[num] === undefined || array[num] === null) clearInterval(t);
            }, time)

            return {
                stop() {
                    clearInterval(t);
                }
            }


        }
    }
}

const result = sweepingArray(2000).start(array)

