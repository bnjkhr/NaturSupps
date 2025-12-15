// Re-export useAuth Hook aus AuthContext
// Dies ermöglicht einen konsistenten Import-Pfad: import { useAuth } from './hooks/useAuth'
export { useAuth } from '../contexts/AuthContext';
export default { useAuth: () => require('../contexts/AuthContext').useAuth() };
