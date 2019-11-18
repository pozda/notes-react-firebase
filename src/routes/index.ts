export interface RouteConfig {
    id: string;
    path: string;
    getPathWithParams?: Function;
    name: string;
    exact?: boolean;
    redirectTo?: string;
}

const routes: {
    notes: RouteConfig;
    noteAdd: RouteConfig;
    noteEdit: RouteConfig;
} = {
    notes: {
        id: 'notes',
        path: '/',
        name: 'Notes',
        exact: true
    },
    noteAdd: {
        id: 'addNewNote',
        path: '/note/add',
        name: 'Add note',
        exact: true
    },
    noteEdit: {
        id: 'editNoDE',
        name: 'Edit note',
        path: '/note/edit/:id',
        getPathWithParams: (id: string): string => `/note/edit/${id}`
    }
}

export default routes