import express from 'express';
import db from '../config/database';

const router = express.Router();

router.post('/consultar', async (req, res) => {
    try {
      // Cambiar 'cedulas' por 'emails' para reflejar que se está manejando información de correo electrónico
      const emails = req.body.emails.split(',');
      const [results] = await db.query(
        // Cambiar la consulta para buscar por 'email' en lugar de 'cedula'
        'SELECT * FROM tabla_consolidada_all WHERE email IN (?) ORDER BY FIELD(email, ?)',
        [emails, emails]
      );
      res.json(results);
    } catch (error) {
      console.error('Error en la consulta de emails:', error);
      res.status(500).send('Error interno del servidor');
    }
});

export default router;

