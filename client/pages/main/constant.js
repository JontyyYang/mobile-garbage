import center from './img/center.jpg';
import wallet from './img/wallet.jpg';
import order from './img/order.jpg';
import service from './img/service.jpg';
import compare from './img/compare.jpg';

export const funcItem = [
  {
    funcName: '环保钱包',
    funcImg: wallet,
    funcUrl: 'wallet',
  },
  {
    funcName: '服务订单',
    funcImg: order,
    funcUrl: 'order',
  },
  {
    funcName: '呼叫服务',
    funcImg: service,
    funcUrl: 'callService',
  },
  {
    funcName: '常见问题',
    funcImg: center,
    funcUrl: 'CustomerService',
  },
  {
    funcName: '排行榜',
    funcImg: compare,
    funcUrl: 'Leaderboard',
  },
];

export const functionName = {
  callService: 'callService',
  wallet: 'wallet',
  order: 'order',
  CustomerService: 'CustomerService',
  Leaderboard: 'Leaderboard',
};
