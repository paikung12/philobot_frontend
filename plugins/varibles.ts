import Vue from 'vue'
Vue.prototype.$ccc = "text-4xl bg-green-600 p-6" 
Vue.prototype.$home = {
    'card':"text-4xl bg-green-600 p-6"
}

Vue.prototype.$url  = "http://192.168.1.2:8000/"  //`https://admin-canabit.tk/`
Vue.prototype.$furl = `http://localhost:3000/canabit_frontend/`
Vue.prototype.$comma = function Comma(Num:any)
{
      Num += '';
      Num = Num.replace(/,/g, '');
      let x:any 
      let x1:any 
      let x2:any
      x = Num.split('.');
      x1 = x[0];
      x2 = x.length > 1 ? '.' + x[1] : '';
      var rgx = /(\d+)(\d{3})/;
      while (rgx.test(x1))
      x1 = x1.replace(rgx, '$1' + ',' + '$2');
      return x1 + x2;
}
