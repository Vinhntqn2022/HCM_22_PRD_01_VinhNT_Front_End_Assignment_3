const gioBatDauDi = 19;

function conThoAnCo(hanhDongTiepTheo){
    console.log(`con tho an co luc ${gioBatDauDi}H`)
    setTimeout(() => {
        console.log(`con tho an co xong luc ${gioBatDauDi + 1}H`)
        hanhDongTiepTheo()
    }, 2000)
}
function conThoDiXemPhim(hanhDongTiepTheo) {
    setTimeout(() => {
        console.log(`con tho di xem phim xong luc ${gioBatDauDi + 3}H`);
        hanhDongTiepTheo()
    }, 2000)
}
function conThoDiDao() {
    setTimeout(() => {
        console.log(`con tho di dao xong luc ${gioBatDauDi + 4}H`)
    }, 1000)
    
}

conThoAnCo(() => {
    conThoDiXemPhim(conThoDiDao)
})