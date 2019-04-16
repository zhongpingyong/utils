export default {
    /*
    * 截取url参数
    * */
    loadPageVar(sVar) {
        return decodeURI(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURI(sVar).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
    },
    /**
     * 传入时间戳，转换指定的时间格式
     * @param {Number} val      时间戳
     * @param {String} dateType 要得到的时间格式 例如 YYYY-MM-DD hh:mm:ss
     * @return dataStr 例如 YYYY-MM-DD hh:mm:ss
     */
    switchTime: (val = +new Date(), dateType = 'YYYY-MM-DD hh:mm:ss') => {
        // 将字符串转换成数字
        let timeStamp, dateStr, str
        timeStamp = +new Date(val)

        // 如果转换成数字出错
        if (!timeStamp) {
            return val
        }

        // 得到时间字符串
        dateStr = new Date(timeStamp)
        str = dateType.replace('YYYY', dateStr.getFullYear())
        str = str.replace('MM', (dateStr.getMonth() + 1 < 10 ? '0' : '') + (dateStr.getMonth() + 1))
        str = str.replace('DD', (dateStr.getDate() < 10 ? '0' : '') + dateStr.getDate())
        str = str.replace('hh', (dateStr.getHours() < 10 ? '0' : '') + dateStr.getHours())
        str = str.replace('mm', (dateStr.getMinutes() < 10 ? '0' : '') + dateStr.getMinutes())
        str = str.replace('ss', (dateStr.getSeconds() < 10 ? '0' : '') + dateStr.getSeconds())

        return str
    },
    /**
     *  每天某段时间执行一个任务
     * @param {*} h 时
     * @param {*} m 分
     * @param {*} s 秒
     * @param {*} task 任务(函数)
     */
    excuteTask(h, m, s, task) {
        let timerId = setInterval(function () {
            let date = new Date();
            if (date.getHours() === h && date.getMinutes() === m && date.getSeconds() === s) {
                clearInterval(timerId)
                task();
                //每隔一天执行
                setInterval(task, 24 * 60 * 60 * 1000)
            }
        }, 1000)
    },
    /*
    * 一维数组转二维数组
    *params:
    *
    * array是数组
    * n 每页显示几个
    * */
    switchOneArrayTwo(array,n){
        try {
            let lineNum = array.length % 10 === 0 ? array.length / 10 : Math.ceil(array.length/10);
            let A=[]
            for (let i=0;i<lineNum;i++){
                A.push(array.slice(i*n, i*n+n))
            }
            return A
        }catch (e) {
            console.log(e)
        }
    }
}