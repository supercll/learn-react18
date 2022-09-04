export function fetchUser(id, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id, name: `姓名${id}` })
      // reject({ errMsg: '获取数据失败' });
    }, 1000 * delay)
  })
}
