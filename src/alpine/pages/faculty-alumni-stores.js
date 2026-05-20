import { facultyAlumniPageContent } from '../../data/pages/faculty-alumni-content.js';

export function registerFacultyAlumniStores(Alpine) {
    Alpine.store('facultyAlumniPage', facultyAlumniPageContent);
}
