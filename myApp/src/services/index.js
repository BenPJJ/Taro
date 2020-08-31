import HttpService from './HttpService'


const getData = () => {

}
export const service = {
  getData() {
    return HttpService.get({
      url: 'http://172.20.10.2:8000'
    });
  }
}
