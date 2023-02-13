import { AxiosResponse } from 'axios'
import { api } from './config/flaskAPI'
import { FlaskApiData } from '../Types';

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
	get: (url: string) => api.get(url).then(responseBody),
};

export const FlaskAPI = {
    getAll: (): Promise<FlaskApiData> => requests.get('/time'),
}