// 用法: 先复制 Excel 内容到 https://www.bejson.com/json/col2json/ 转成 json,替换下面变量
const json = [
    { 中文:'视频匹配之星',英文:'Video Match Star',印尼:'Bintang Match Video',葡语:'Estrela de Match de Vídeo',西语:'Estrella de VídeoMatch' },
    { 中文:'随机匹配、找到你的灵魂伴侣',英文:'Random match: find your soul mate',印尼:'Pencocokan acak: temukan jodohmu',葡语:'Match aleatório: encontrar seu amor',西语:'Empareja aleatoria: encuentra a tu alma gemela' },
    { 中文:'规则',英文:'Rules',印尼:'Aturan',葡语:'Regras',西语:'Reglas' },
    { 中文:'活动规则：',英文:'Event rules',印尼:'Aturan acara',葡语:'Regras do evento',西语:'Reglas de evento:' },
    { 中文:'1、榜单按照有效的视频匹配总时长排名，有效匹配时长=单个匹配来电>=50秒',英文:'1. The list is ranked according to the total duration of effective video matching, and the effective matching time =  a single matching call >=50 seconds',印尼:'1. Daftar peringkat ini diurutkan berdasarkan total durasi pencocokan video yang valid, dan waktu pencocokan yang valid = satu panggilan pencocokan >=50 detik',葡语:'1. A lista é classificada de acordo com a duração total de Match de Vídeo efetiva. Tempo de match efetiva = uma  chamada de match >=50 segundos',西语:'1. La lista se clasifica según la duración total de la coincidencia de video efectiva y el tiempo de coincidencia efectivo = una sola llamada coincidente >=50 segundos' },
    { 中文:'2、活动奖励将会在活动结束的5个工作日内发放',英文:'2. The event reward will be issued within 5 working days after the end of the event',印尼:'2. Hadiah acara akan diberikan dalam waktu 5 hari kerja setelah acara berakhir',葡语:'2. A recompensa do evento será emitida dentro de 5 dias úteis após o final do evento.',西语:'2. La recompensa del evento se emitirá dentro de los 5 días hábiles posteriores a la finalización del evento.' },
    { 中文:'3、参与活动的用户必须是真人认证的女性用户',英文:'3. The participating user in the activity must be a female user certified by a real person',印尼:'3. Pengguna yang berpartisipasi dalam aktivitas harus pengguna wanita yang terverifikasi orang sungguhan',葡语:'3. O usuário participante do evento deve ser um usuário feminino e REAL',西语:'3. El usuario participante en la actividad debe ser una usuaria certificada por una persona real' },
    { 中文:'4、榜单数值按照分钟来展示，1分钟=1分值；分值越高，排名越靠前',英文:'4. The list value is displayed according to the valid call duration, 1 minute = 1 point value; The higher the score, the higher the ranking',印尼:'4. Nilai daftar ditampilkan berdasarkan durasi panggilan yang valid, 1 menit = 1 poin; Semakin tinggi poin, semakin tinggi peringkat',葡语:'4. Os pontos da lista é exibido de acordo com a duração da chamada válida, 1 minuto = 1 ponto; quanto maior a pontuação, maior a classificação',西语:'4. El valor de la lista se muestra de acuerdo con la duración válida de la llamada, 1 minuto = valor de 1 punto; Cuanto mayor sea la puntuación, mayor será la clasificación' },
    { 中文:'所有解释权归Timo所有',英文:'All interpretation rights are owned by Timo',印尼:'Semua hak interpretasi milik Timo',葡语:'Todos os direitos reservados a Timo',西语:'Todos los derechos reservados a Timo' },
    { 中文:'活动奖励',英文:'Event Reward',印尼:'Hadiah Acara',葡语:'Bônus do Evento',西语:'' },
    { 中文:'排名',英文:'Rank',印尼:'Peringkat',葡语:'Ranking',西语:'' },
    { 中文:'查看更多',英文:'View More',印尼:'Selengkapnya',葡语:'Ver mais',西语:'' },
    { 中文:'收起',英文:'Fold it',印尼:'Tutup',葡语:'Dobrar',西语:'' },
    { 中文:'活动时间',英文:'Event time',印尼:'Waktu acara',葡语:'Horário do evento',西语:'' },
    { 中文:'座驾',英文:'Ride',印尼:'Kendaraan',葡语:'Ride',西语:'Coche' },
    { 中文:'头像框',英文:'Frame',印尼:'Bingkai',葡语:'Moldura',西语:'Marco' },
    { 中文:'播放',英文:'Play',印尼:'Putar',葡语:'Reproduzir',西语:'Reproducir ' },
    { 中文:'勋章',英文:'Medal',印尼:'Lencana',葡语:'Medalha',西语:'Medalla' },
    { 中文:'奖励',英文:'Rewards',印尼:'Hadiah',葡语:'Prêmio',西语:'Recompensas' },
    { 中文:'称号',英文:'Title',印尼:'Gelar',葡语:'Título',西语:'Título' },
    { 中文:'钻石',英文:'Diamond',印尼:'Berlian',葡语:'Diamante',西语:'Diamante' },
    { 中文:'第1名',英文:'1st place',印尼:'TOP 1',葡语:'TOP 1',西语:'1er lugar' },
    { 中文:'第2-5名',英文:'2nd-5th place',印尼:'TOP 2-5',葡语:'TOP 2-5',西语:'2do-5to lugar' },
    { 中文:'第6-10名',英文:'6th-10th place',印尼:'TOP 6-10',葡语:'TOP 6-10',西语:'6to-10mo lugar' },
    { 中文:'第11-15名',英文:'11th-15th place',印尼:'TOP 11-15',葡语:'TOP 11-15',西语:'11º-15º lugar' },
    { 中文:'天（复数）',英文:'Days',印尼:'Hari',葡语:'Dias',西语:'Días' }
]
// 空格转驼峰
function toHump(s) {
    let a = s.split(' ')
    let result = a[0]
    for (let i = 1; i < a.length; i++) {
        result = result + a[i].slice(0, 1).toUpperCase() + a[i].slice(1)
    }
    return result
}
// console.log(json)

let map = {
    en:{},
    id:{},
    zh:{},
    pt:{},
    es:{},
}
for (let i = 0; i < json.length; i++) {
    let item = json[i]
    let key = toHump(item['英文'])
    key = key.length > 30 ? `text${i}` : key
    // console.log(key)
    map.en[key] = item['英文']
    map.id[key] = item['印尼']
    map.zh[key] = item['中文']
    map.pt[key] = item['葡语']
    map.es[key] = item['西语']
}


const fs = require('fs') // 导入 fs 模块
const path = require('path') // 导入 path 模块

const mkdirs = (pathname, callback) => {
    // 需要判断是否是绝对路径（避免不必要的 bug）
    pathname = path.isAbsolute(pathname) ? pathname : path.join(__dirname, pathname)

    // 获取相对路径
    pathname = path.relative(__dirname, pathname)

    // path.sep 避免平台差异带来的 bug
    const floders = pathname.split(path.sep)

    let pre = '' // 最终用来拼合的路径
    floders.forEach(floder => {
        try {
            // 没有异常，文件已经创建，提示用户该文件已经创建
            const _stat = fs.statSync(path.join(__dirname, pre, floder))
            const hasMkdir = _stat && _stat.isDirectory()
            if (hasMkdir) {
                callback // && callback(`文件${floder}已经存在，不能重复创建，请重新创建！`)
            }
        } catch (err) {
            // 抛出异常，文件不存在则创建文件
            try {
                // 避免父文件还没有创建的时候，先创建子文件所出现的意外 bug，这里选择同步创建文件
                fs.mkdirSync(path.join(__dirname, pre, floder))
                callback && callback(null)
            } catch (error) {
                callback && callback(error)
            }
        }
        pre = path.join(pre, floder) // 路径拼合
    })
}

mkdirs('./lang')
for(let key in map) {
    fs.writeFile(`./lang/${key}.js`, `const ${key} = ${JSON.stringify(map[key],undefined,2)}
export default ${key}
` , (err) => {
        if (err) {
            console.error(err)
            return
        }
    })
}
