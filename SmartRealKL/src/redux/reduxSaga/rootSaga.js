//import {delay} from 'redux-saga'
import {all,fork} from 'redux-saga/effects';
import watchfetchTaiKhoan from './taiKhoanSaga';
import watchfetchCanHo from './canhoSaga';
import watchfetchBinhLuan from './binluanSaga'
export default function* rootSaga(){
    yield all([watchfetchTaiKhoan(),
        watchfetchCanHo(),
        watchfetchBinhLuan(),
    ])
}