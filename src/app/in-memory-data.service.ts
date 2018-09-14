import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
	createDb() {
		const clients = [
			{ id: 11, name: 'Mr. Nice', phone: 2914385058, birthday: '07-05-1980', 
				workDetail: 'color y shock', tone: '4', attentionDay: '28-08-2018'},
			{ id: 12, name: 'Marco', phone: 2914385058, birthday: '07-05-1980', 
				workDetail: 'color y shock', tone: '4', attentionDay: '28-08-2018'},
			{ id: 13, name: 'Bombasto', phone: 2914385058, birthday: '07-05-1980', 
				workDetail: 'color y shock', tone: '4', attentionDay: '28-08-2018'},
			{ id: 14, name: 'Celeritas' , phone: 2914385058, birthday: '07-05-1980', 
				workDetail: 'color y shock', tone: '4', attentionDay: '28-08-2018'},
			{ id: 15, name: 'Magneta' , phone: 2914385058, birthday: '07-05-1980', 
				workDetail: 'color y shock', tone: '4', attentionDay: '28-08-2018'},
			{ id: 16, name: 'RubberMan', phone: 2914385058, birthday: '07-05-1980', 
				workDetail: 'color y shock', tone: '4', attentionDay: '28-08-2018'},
			{ id: 17, name: 'Dynama', phone: 2914385058, birthday: '07-05-1980', 
				workDetail: 'color y shock', tone: '4', attentionDay: '28-08-2018'},
			{ id: 18, name: 'Dr IQ', phone: 2914385058, birthday: '07-05-1980', 
				workDetail: 'color y shock', tone: '4', attentionDay: '28-08-2018'},
			{ id: 19, name: 'Magma', phone: 2914385058, birthday: '07-05-1980', 
				workDetail: 'color y shock', tone: '4', attentionDay: '28-08-2018'},
			{ id: 20, name: 'Tornado', phone: 2914385058, birthday: '07-05-1980', 
				workDetail: 'color y shock', tone: '4', attentionDay: '28-08-2018'}
		];

		return { clients };
	}
}