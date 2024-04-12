const router = require("express").Router();
const {UserSkateTricks} = require("../../models");

router.post('/', async (req, res) => {
    const trickStatus = req.body;

    try {
        for (const { trickId, isChecked } of trickStatus) {
            await UserSkateTricks.update(
                { completed: isChecked },
                { where: { skateTrickId: trickId } }
            );
        }
        
        res.status(200).send('Trick statuses successfully updated');
    } catch (error) {
        console.error('Error updating trick statuses:', error);
        res.status(500).send('Error updating trick statuses');
    }
});

module.exports = router;