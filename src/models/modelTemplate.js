/**
 *{   
      namespace: String, // 命名空间名字，必填      namespace: 'global' 说明以下此处的dva命名空间为 global，即你调用的时候需要采用 global.XXX 的形式   
      state: Object, // 状态   
      reducer: Object, // 同步更新 state 修改状态  
      effects: Object, // 副作用：处理异步逻辑,当数据需要从服务器获取时，需要发起异步请求，请求到数据之后，通过调用 Reducers更新数据到全局state   
      subscriptions: Object // 订阅数据源
 }

 */

const modelName = {
  namespace: "modelName",
  state: {
    loading: false,
    // ...自行扩展其他状态
  },
  // 用来处理同步操作，reducer必须是一个纯函数，接收state 和 action，返回新的state对象
  reducers: {
    // 设置loading状态
    setLoading(state, action) {
      console.log(
        "%c @ setLoading: ",
        "color: White; background: Black; font-size: 14px; font-weight: 500",
      )
      return {
        ...state,
        loading: true,
      }
    },
    // 取消loading状态
    unsetLoading(state, action) {
      console.log(
        "%c @ setLoading: ",
        "color: White; background: Black; font-size: 14px; font-weight: 500",
      )
      return {
        ...state,
        loading: false,
      }
    },
    // 合并结果
    mergeState(state, action) {
      console.log(
        "%c @ setLoading: ",
        "color: White; background: Black; font-size: 14px; font-weight: 500",
      )
      return Object.assign({}, state, action.payload)
    },
  },
  // 用来处理异步操作
  // 如果需要调取接口的话，前台页面就需要调用 effects 里的方法。将数据取出来，再传递给 reducers 里的方法进行数据操作和同步。
  // Dva中的异步操作都放到effects中管理，基于Redux-saga实现Effect是一个Generator函数，内部使用yield关键字，标识每一步的操作。
  /**
   * 每一个 effect 都可以接收两个参数：
   * 1、dispatch派发的action对象（含type和payload）如果不需要第一个参数可以将其标注为"_",即someAsyncOperate（_,{call, put, select}）{}
   * 2、dva提供的effect函数内部使用的【处理函数集】
   */

  /**
   * call  调用方法 接收两个参数，第一个传参：方法名  第二个参数：调用该方法时的入参
   * select  获取某个model中的state值  const stateValue = yield select((state) => state.modelName.modelState)
   * put  等同于dispatch,用于在effect函数内部派发同步action
   *    action.type  该Model层里reducers下的某个方法名。
   *    action.payload  要传递的参数
   */
  effects: {
    *someAsyncOperate({ type, payload }, { call, put, select }) {
      yield put({ type: "setLoading" })
      // const data = yield call(调用的方法名，入参) ... ...
      yield put({ type: "unsetLoading" })
    },
  },
  subscriptions: {
    // 订阅监听，比如我们监听路由，进入页面就如何，可以在这写
    setup({ dispatch, history, query }) {
      return history.listen(async ({ pathname, search, query }) => {
        if (pathname === "/someRoute") {
          // 当进入someRoute路由，就会触发specificFunc方法（理论上应该是effects中注册的方法）
          dispatch({ type: "specificFunc" })
        }
      })
    },
  },
}
export default modelName

/**
 *  在组件中使用：
 *
 * 1、在组件中先通过connect连接Model和组件
 *      import { connect } from 'dva';
 *      ...
 *      ...
 *      export default connect(({index}) => ({index}))(IndexPage);
 * 2、在组件中通过dispatch调用model层的方法
 *      const { dispatch } = this.props
 *      dispatch ({
 *           //指定哪个model层里面的哪个方法
 *           type: 'modelName/someEffect',
 *           //需要传递到model层里面的参数， payload为约定的固定用法(我自己的理解)。
 *           payload: {xxx:'xxxxxx'},
 *       })
 */
