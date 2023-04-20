const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  try {
    let results = await Tag.findAll({
      include:[
        {model: Product }
      ]
    })
    res.status(200).json(results)
  }catch{((err) => {
    console.log(err);
    res.status(400).json(err);
    });
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  try {
    let results = await Tag.findOne({
      include:[
        {model: Product}
      ],
      where:[{id:req.params.id}]
    })
    res.status(200).json(results)
  }catch{((err) => {
    console.log(err);
    res.status(400).json(err);
    });
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try{
  let results = await Tag.create(req.body)
  res.status(200).json(results);
  }catch{
    console.log(err)
    res.status(400).json(err)
  }
})

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try{
    let results = await Tag.update(
      req.body, {
        where: {
          id: req.params.id,
        },
      }
    )
    res.status(200).json(results);
    }catch{
      console.log(err)
      res.status(400).json(err)
    }
})


router.delete('/:id', async(req, res) => {
  // delete on tag by its `id` value
  try{
    let results = await Tag.destroy({where: {id: req.params.id}})
    res.status(200).json(results);
    }catch{
      console.log(err)
      res.status(400).json(err)
    }
});

module.exports = router;
