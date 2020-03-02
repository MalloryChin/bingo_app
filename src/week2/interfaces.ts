export interface User {
	name: string;
	mobile: string;
	email: string;
	birthday: string;
}

export const cUserNameConvention: Record<keyof User, string> = {
	name: '姓名',
	mobile: '手機',
	email: 'email',
	birthday: '生日',
};
