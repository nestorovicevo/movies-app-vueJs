import { httpService } from './HttpService';

class MoviesService {

    add(post){
        return httpService.post('/movies', movie)
    }

    getAll(){
        return httpService.get('/movies')
    }

    get(id){
        return httpService.get('/movies/{id}')
    }

}

export const movies = new MoviesService()