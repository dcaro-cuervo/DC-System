import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
	createDb() {
		const clients = [
			{ id: 1, firstName: 'Juan', lastName: 'Peres', hc: 11, dni: 2914385058, adress: 'Apeleg 133',
			age: 56, sex: 'Masculino', phone: '4', hospitalOrigin: 'telsen', status: 'Pendiente', 
			additionalInformation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula est sit amet dui auctor, sit amet condimentum lorem facilisis. Nullam pretium, ante ut pharetra commodo, mauris leo sodales turpis, non mattis arcu ante at lectus. Quisque eget porttitor libero, vel lacinia ipsum. Proin bibendum nulla nunc, sed bibendum velit bibendum id. In hac habitasse platea dictumst. Suspendisse vestibulum sagittis aliquet. Maecenas a neque id ipsum finibus semper quis vel urna. Nunc ac dignissim ipsum. Suspendisse lacinia sit amet est a commodo. Nulla facilisi. Cras dignissim eros iaculis diam ullamcorper dictum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras a dolor blandit nulla mattis pretium sed a leo. Aliquam non urna blandit, accumsan mauris vitae, pretium sapien. Proin viverra fermentum tortor sed vestibulum.', 
			fullName: 'Juan Peres'},
			{ id: 2, firstName: 'Marco', lastName: 'Iglesias', hc: 12, dni: 2914385058, adress: 'Apeleg 133',
			age: 96, sex: 'Masculino', phone: 34434787, hospitalOrigin: 'gangan', status: 'Pendiente', 
			additionalInformation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula est sit amet dui auctor, sit amet condimentum lorem facilisis. Nullam pretium, ante ut pharetra commodo, mauris leo sodales turpis, non mattis arcu ante at lectus. Quisque eget porttitor libero, vel lacinia ipsum. Proin bibendum nulla nunc, sed bibendum velit bibendum id. In hac habitasse platea dictumst. Suspendisse vestibulum sagittis aliquet. Maecenas a neque id ipsum finibus semper quis vel urna. Nunc ac dignissim ipsum. Suspendisse lacinia sit amet est a commodo. Nulla facilisi. Cras dignissim eros iaculis diam ullamcorper dictum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras a dolor blandit nulla mattis pretium sed a leo. Aliquam non urna blandit, accumsan mauris vitae, pretium sapien. Proin viverra fermentum tortor sed vestibulum.', 
			fullName: 'Marco Iglesias'},
			{ id: 3, firstName: 'Juan', lastName: 'Bombasto', hc: 13, dni: 2914385058, adress: 'Apeleg 133',
			age: '56', sex: 'Masculino', phone: 3442389823791, hospitalOrigin: 'Hospital Isola', status: 'Pendiente', 
			additionalInformation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula est sit amet dui auctor, sit amet condimentum lorem facilisis. Nullam pretium, ante ut pharetra commodo, mauris leo sodales turpis, non mattis arcu ante at lectus. Quisque eget porttitor libero, vel lacinia ipsum. Proin bibendum nulla nunc, sed bibendum velit bibendum id. In hac habitasse platea dictumst. Suspendisse vestibulum sagittis aliquet. Maecenas a neque id ipsum finibus semper quis vel urna. Nunc ac dignissim ipsum. Suspendisse lacinia sit amet est a commodo. Nulla facilisi. Cras dignissim eros iaculis diam ullamcorper dictum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras a dolor blandit nulla mattis pretium sed a leo. Aliquam non urna blandit, accumsan mauris vitae, pretium sapien. Proin viverra fermentum tortor sed vestibulum.', 
			fullName: 'Juan Bombasto'},
			{ id: 4, firstName: 'Isabel', lastName: 'Celeritas', hc: 14, dni: 2914385058, adress: 'Apeleg 133',
			age: '56', sex: 'Femenino', phone: 162323983, hospitalOrigin: 'CAPS Roque Gonzalez', status: 'Pendiente', 
			additionalInformation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula est sit amet dui auctor, sit amet condimentum lorem facilisis. Nullam pretium, ante ut pharetra commodo, mauris leo sodales turpis, non mattis arcu ante at lectus. Quisque eget porttitor libero, vel lacinia ipsum. Proin bibendum nulla nunc, sed bibendum velit bibendum id. In hac habitasse platea dictumst. Suspendisse vestibulum sagittis aliquet. Maecenas a neque id ipsum finibus semper quis vel urna. Nunc ac dignissim ipsum. Suspendisse lacinia sit amet est a commodo. Nulla facilisi. Cras dignissim eros iaculis diam ullamcorper dictum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras a dolor blandit nulla mattis pretium sed a leo. Aliquam non urna blandit, accumsan mauris vitae, pretium sapien. Proin viverra fermentum tortor sed vestibulum.', 
			fullName: 'Isabel Celeritas'},
			{ id: 5, firstName: 'Mirta', lastName: 'Magneta', hc: 15, dni: 2914385058, adress: 'Apeleg 133',
			age: '56', sex: 'Femenino', phone: 3487987392873, hospitalOrigin: 'Piramides', status: 'Pendiente', 
			additionalInformation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula est sit amet dui auctor, sit amet condimentum lorem facilisis. Nullam pretium, ante ut pharetra commodo, mauris leo sodales turpis, non mattis arcu ante at lectus. Quisque eget porttitor libero, vel lacinia ipsum. Proin bibendum nulla nunc, sed bibendum velit bibendum id. In hac habitasse platea dictumst. Suspendisse vestibulum sagittis aliquet. Maecenas a neque id ipsum finibus semper quis vel urna. Nunc ac dignissim ipsum. Suspendisse lacinia sit amet est a commodo. Nulla facilisi. Cras dignissim eros iaculis diam ullamcorper dictum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras a dolor blandit nulla mattis pretium sed a leo. Aliquam non urna blandit, accumsan mauris vitae, pretium sapien. Proin viverra fermentum tortor sed vestibulum.', 
			fullName: 'Mirta Magneta'},
			{ id: 6, firstName: 'Juan', lastName: 'RubberMan', hc: 16, dni: 2914385058, adress: 'Apeleg 133',
			age: '56', sex: 'Masculino', phone: 3434211989, hospitalOrigin: 'Gastre', status: 'Pendiente', 
			additionalInformation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula est sit amet dui auctor, sit amet condimentum lorem facilisis. Nullam pretium, ante ut pharetra commodo, mauris leo sodales turpis, non mattis arcu ante at lectus. Quisque eget porttitor libero, vel lacinia ipsum. Proin bibendum nulla nunc, sed bibendum velit bibendum id. In hac habitasse platea dictumst. Suspendisse vestibulum sagittis aliquet. Maecenas a neque id ipsum finibus semper quis vel urna. Nunc ac dignissim ipsum. Suspendisse lacinia sit amet est a commodo. Nulla facilisi. Cras dignissim eros iaculis diam ullamcorper dictum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras a dolor blandit nulla mattis pretium sed a leo. Aliquam non urna blandit, accumsan mauris vitae, pretium sapien. Proin viverra fermentum tortor sed vestibulum.', 
			fullName: 'Juan RubberMan'},
			{ id: 7, firstName: 'Rosa', lastName: 'Dynama', hc: 17, dni: 2914385058, adress: 'Apeleg 133',
			age: '78', sex: 'Femenino', phone: 213712834, hospitalOrigin: 'CAPS Possi', status: 'Pendiente', 
			additionalInformation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula est sit amet dui auctor, sit amet condimentum lorem facilisis. Nullam pretium, ante ut pharetra commodo, mauris leo sodales turpis, non mattis arcu ante at lectus. Quisque eget porttitor libero, vel lacinia ipsum. Proin bibendum nulla nunc, sed bibendum velit bibendum id. In hac habitasse platea dictumst. Suspendisse vestibulum sagittis aliquet. Maecenas a neque id ipsum finibus semper quis vel urna. Nunc ac dignissim ipsum. Suspendisse lacinia sit amet est a commodo. Nulla facilisi. Cras dignissim eros iaculis diam ullamcorper dictum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras a dolor blandit nulla mattis pretium sed a leo. Aliquam non urna blandit, accumsan mauris vitae, pretium sapien. Proin viverra fermentum tortor sed vestibulum.', 
			fullName: 'Rosa Dynama'},
			{ id: 8, firstName: 'Juan', lastName: 'Mellada', hc: 18, dni: 2914385058, adress: 'Apeleg 133',
			age: '49', sex: 'Masculino', phone: 87687623, hospitalOrigin: 'Hospital Isola', status: 'Pendiente', 
			additionalInformation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula est sit amet dui auctor, sit amet condimentum lorem facilisis. Nullam pretium, ante ut pharetra commodo, mauris leo sodales turpis, non mattis arcu ante at lectus. Quisque eget porttitor libero, vel lacinia ipsum. Proin bibendum nulla nunc, sed bibendum velit bibendum id. In hac habitasse platea dictumst. Suspendisse vestibulum sagittis aliquet. Maecenas a neque id ipsum finibus semper quis vel urna. Nunc ac dignissim ipsum. Suspendisse lacinia sit amet est a commodo. Nulla facilisi. Cras dignissim eros iaculis diam ullamcorper dictum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras a dolor blandit nulla mattis pretium sed a leo. Aliquam non urna blandit, accumsan mauris vitae, pretium sapien. Proin viverra fermentum tortor sed vestibulum.', 
			fullName: 'Juan Mellada'},
			{ id: 9, firstName: 'Ana', lastName: 'Magma', hc: 19, dni: 2914385058, adress: 'Apeleg 133',
			age: '69', sex: 'Femenino', phone: 3746876876, hospitalOrigin: 'Hopital Isola', status: 'Pendiente', 
			additionalInformation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula est sit amet dui auctor, sit amet condimentum lorem facilisis. Nullam pretium, ante ut pharetra commodo, mauris leo sodales turpis, non mattis arcu ante at lectus. Quisque eget porttitor libero, vel lacinia ipsum. Proin bibendum nulla nunc, sed bibendum velit bibendum id. In hac habitasse platea dictumst. Suspendisse vestibulum sagittis aliquet. Maecenas a neque id ipsum finibus semper quis vel urna. Nunc ac dignissim ipsum. Suspendisse lacinia sit amet est a commodo. Nulla facilisi. Cras dignissim eros iaculis diam ullamcorper dictum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras a dolor blandit nulla mattis pretium sed a leo. Aliquam non urna blandit, accumsan mauris vitae, pretium sapien. Proin viverra fermentum tortor sed vestibulum.', 
			fullName: 'Ana Magma'},
			{ id: 10, firstName: 'Juan', lastName: 'Tornado', hc: 201, dni: 2914385058, adress: 'Apeleg 133',
			age: '88', sex: 'Masculino', phone: 786926, hospitalOrigin: 'Hospital Isola', status: 'Pendiente', 
			additionalInformation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula est sit amet dui auctor, sit amet condimentum lorem facilisis. Nullam pretium, ante ut pharetra commodo, mauris leo sodales turpis, non mattis arcu ante at lectus. Quisque eget porttitor libero, vel lacinia ipsum. Proin bibendum nulla nunc, sed bibendum velit bibendum id. In hac habitasse platea dictumst. Suspendisse vestibulum sagittis aliquet. Maecenas a neque id ipsum finibus semper quis vel urna. Nunc ac dignissim ipsum. Suspendisse lacinia sit amet est a commodo. Nulla facilisi. Cras dignissim eros iaculis diam ullamcorper dictum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras a dolor blandit nulla mattis pretium sed a leo. Aliquam non urna blandit, accumsan mauris vitae, pretium sapien. Proin viverra fermentum tortor sed vestibulum.', 
			fullName: 'Juan Tornado'}
		];

		const studies = [
			{ id: 1, date: '2018-02-22', name: 'Ecodoppler color arterial de ambos miembros inferiores', medic: 'Diaz', lender: 'Idech', audit: 'No',
			evolutionAudit: '', state: ''},
			{ id: 2, date: '2018-02-20', name: 'Ecografia mamaria bilateral', medic: 'lala', lender: 'Idech', audit: 'No',
			evolutionAudit: '', state: ''},
			{ id: 3, date: '2017-11-27', name: 'Papanicolau hormonal y oncologico', medic: 'Diaz', lender: 'Idech', audit: 'No',
			evolutionAudit: '', state: ''},
			{ id: 4, date: '2017-11-09', name: 'Estudios clínicos de laboratorio', medic: 'Diaz', lender: 'Idech', audit: 'No',
			evolutionAudit: '', state: ''},
			{ id: 5, date: '2017-02-07', name: 'Radiografia de torax frente y perfil ', medic: 'Diaz', lender: 'Idech', audit: 'No',
			evolutionAudit: '', state: ''},
			{ id: 6, date: '2016-12-07', name: 'Estudios clínicos de laboratorio', medic: 'Diaz', lender: 'Idech', audit: 'No',
			evolutionAudit: '', state: ''}];

		return { clients, studies };
	}
}