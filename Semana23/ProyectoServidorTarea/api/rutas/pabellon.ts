import { Router } from 'express';
import { PostPabellon, GetPabellon, GetPabellonesById, updatePabellon, getAulasXPabellones, getAulasByPabellonId } from '../controladores/pabellon';

export let pabellon_router = Router();
pabellon_router.post('/pabellon',PostPabellon);
pabellon_router.get('/pabellon',GetPabellon);
pabellon_router.get('/pabellon/:id',GetPabellonesById);
pabellon_router.put('/pabellon',updatePabellon);
pabellon_router.get('/pabellones/aulas',getAulasXPabellones);
pabellon_router.get('/pabellones/:id/aulas',getAulasByPabellonId)
