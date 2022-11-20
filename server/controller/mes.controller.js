const db = require('../db');
const CryptoJS = require('crypto-js');

class MesController {
   async createMes(req, res) {
      const { mes, link } = req.body;
      const encryptedMes = CryptoJS.AES.encrypt(mes, 'gfdgbbv').toString();
      const newMes = await db.query(
         'INSERT INTO secret (message, link) values ($1, $2) returning *',
         [encryptedMes, link]
      );
      res.json(newMes.rows);
   }

   async getMes(req, res) {
      const link = req.params.link;
      const message = await db.query('select * from secret where link = $1', [
         link,
      ]);
      const encryptedMes = message.rows[0].message;
      const bytes = CryptoJS.AES.decrypt(encryptedMes, 'gfdgbbv');
      const originalText = bytes.toString(CryptoJS.enc.Utf8);
      res.json(originalText);
   }

   // async deleteMes(req, res) {
   //    const id = req.params.id;
   //    const message = await db.query('delete from secret where id = $1', [id]);
   //    res.json(message.rows[0]);
   // }
}

module.exports = new MesController();
