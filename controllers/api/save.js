const router = require("express").Router();
const {UserSkateTricks, User} = require("../../models");

router.post('/', async (req, res) => {
    const trickStatus = req.body;

    const userId = req.session.user_id;
    console.log('user ID: ', userId);

    try {

        var total = 0;
        console.log('starting value ', total);
        for (const { trickId, isChecked } of trickStatus) {

            if(isChecked === true){
                total++;
            }

            await UserSkateTricks.update(
                { completed: isChecked },
                { where: { skateTrickId: trickId } }
            );
        }
        console.log('ending value ', total);

        const updatedUserRank = await updateRank(total)
        console.log('updated user rank: ', updatedUserRank);

        User.update(
            { rank: updatedUserRank},
            { where: { id: userId }}
        );

        res.render('user', {
            updatedUserRank
        })        

        res.status(200).send('Trick statuses successfully updated');
    } catch (error) {
        console.error('Error updating trick statuses:', error);
        res.status(500).send('Error updating trick statuses');
    }
});

//logic for rank update
function updateRank(trickCounter) {
    if(trickCounter < 3) {
      userRank = 'Noob';
    } else if (trickCounter < 6){
      userRank = 'Novice';
    } else if (trickCounter < 9){
      userRank = 'Mid';
    } else if (trickCounter < 12) {
      userRank = 'Gnarly';
    } else {
      userRank = 'Pro';
    }
    return userRank;
  } 

module.exports = router;