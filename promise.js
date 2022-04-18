const gioBatDauDi = 19;

function conThoAnCo() {
    return new Promise((resolve, reject) => {
        console.log(`con tho an co luc ${gioBatDauDi}H`)
        setTimeout(() => {
            console.log(`con tho an co xong luc ${gioBatDauDi + 1}H`)
            resolve()
            reject('bi dau bung')
        }, 2000)
    })
}
function conThoDiXemPhim() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`con tho di xem phim xong luc ${gioBatDauDi + 3}H`);
            resolve()
            reject('bi dau bung')
        }, 2000)
    })
    
}
function conThoDiDao() {
    setTimeout(() => {
        console.log(`con tho di dao xong luc ${gioBatDauDi + 4}H`)
    }, 1000)
    
}
// conThoAnCo()
//     .then(() => {
//         conThoDiXemPhim()
//         .then(() => {
//             conThoDiDao()
//         })
//         .catch(error => {
//             console.log(error)
//         })
//     })  
//     .catch(error => {
//         console.log(error)
//     })
conThoAnCo()
    .then(() => {
       return conThoDiXemPhim()     
    })
    .then(() => {
        conThoDiDao()
    })  
    .catch(khongDiDuoc => {
        console.log(khongDiDuoc)
    })

    