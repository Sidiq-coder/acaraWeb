// const categories = require('./model'); //jika ingin mencoba cara yang dikomen maka harus panggil model terlebih dahulu

const {StatusCodes} = require('http-status-codes');

const {getAllCategories, createCategories, getOneCategories, updateCategories, deleteCategories} = require('../../../services/mongos/categories');

// contoh create
// const create = async(req, res, next) => {
//     try {
//         const {name} = req.body;
//         const result = await categories.create({name});
//         res.status(201).json({
//             data: result,
//         });
//     } catch (err) {
//         next(err);
//     }
// };


const create = async(req, res, next) => {
  try {
      const result = await createCategories(req);

      res.status(StatusCodes.CREATED).json({
          data: result,
      });
  } catch (err) {
      next(err);
  }
};




// contoh kode getAllCategories

// const index = async (req, res, next) => {
//   try {
//     const result = await categories.find(); // tambahkan .select(_id name) untuk mengambil hanya id dan name
//     res.status(200).json({
//         data: result,
//     });
//   } catch (err) {
//     next(err);
//   }  
// };


const index = async (req, res, next) => {
  try {
    const result = await getAllCategories(req); 
    res.status(StatusCodes.OK).json({
        data: result,
    });
  } catch (err) {
    next(err);
  }  
};

// contoh get by id
// const find = async (req, res, next) => { 
//   try {
//     const {id} = req.params;
//     const result = await categories.findOne({_id: id}); // ada fungsi lain bernama findOneById(id) yang mana hanya mengambil id

//     if (!result) {
//         return res.status(404).json({
//             Message: 'Id tidak ditemukan',
//         });
//     };

//     res.status(200).json({    
//         data: result,
//     });
//   } catch (err) {
//     next(err);
//   }  
// };

const find = async (req, res, next) => { 
  try {
    const result = await getOneCategories(req); 
    
    res.status(StatusCodes.OK).json({    
        data: result,
    });
  } catch (err) {
    next(err);
  }  
};


const update = async (req, res, next) => { 
  try {
    // const {id} = req.params;
    // const {name} = req.body;

    //contoh update
    // const check = await categories.findById({id}); 
    // if (!result) {
    //     return res.status(404).json({
    //         Message: 'Id tidak ditemukan',
    //     });
    // };

    // check.name = name;
    // await check.save();

    // contoh update juga
    // const result = await categories.findByIdAndUpdate(
    //     {_id: id}, 
    //     {name}, 
    //     {new:true, runValidators: true}
    // );

    const result = await updateCategories(req);

    res.status(StatusCodes.OK).json({    
        data: result,
    });

  } catch (err) {
    next(err);
  }  
};

const destroy = async (req, res, next) => { 
  try {
    // contoh delete
    // const {id} = req.params;
 
    // const result = await categories.findByIdAndDelete(id);

    const result = await deleteCategories(req);

    res.status(StatusCodes.OK).json({    
        data: result,
    });

  } catch (err) {
    next(err);
  }  
};


module.exports = {
    destroy,
    find,
    index,
    update,
    create,
};