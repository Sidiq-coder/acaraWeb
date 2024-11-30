const categories = require('../../api/v1/categories/model');
const {BadRequest, NotFound} = require('../../errors');

const getAllCategories = async (req) => {
    const result = await categories.find({organizer: req.user.organizer});

    return result;
}

const createCategories = async (req) => {
    const {name} = req.body;

    // cek categories name
    const check = await categories.findOne({ name, organizer: req.user.organizer });

    // jika kategori sudah ada
    if (check) throw new BadRequest('kategori nama duplikat');

    const result = await categories.create({name, organizer: req.user.organizer});

    return result;
}

const getOneCategories = async (req) => {
    const {id} = req.params;
    const result = await categories.findOne({_id: id, organizer: req.user.organizer}); 

    if (!result) throw new NotFound(`Tidak ada kategori dengan id : ${id}`);
    return result;
}

const updateCategories = async (req) => {
    const { id } = req.params;
    const { name } = req.body;
  
    // cari categories dengan field name dan id selain dari yang dikirim dari params
    const check = await categories.findOne({
      name,
      organizer: req.user.organizer,
      _id: { $ne: id },
    });
  
    // apa bila check true / data categories sudah ada maka kita tampilkan error bad request dengan message kategori nama duplikat
    if (check) throw new BadRequest('kategori nama duplikat');
  
    const result = await categories.findOneAndUpdate(
      { _id: id },
      { name },
      { new: true, runValidators: true }
    );
  
    // jika id result false / null maka akan menampilkan error `Tidak ada Kategori dengan id` yang dikirim client
    if (!result) throw new NotFound(`Tidak ada Kategori dengan id :  ${id}`);
  
    return result;
  };

  const deleteCategories = async (req) => {
    const { id } = req.params;
  
    const result = await categories.findOne({
      _id: id,
      organizer: req.user.organizer,
    });
  
    if (!result) throw new NotFound(`Tidak ada Kategori dengan id :  ${id}`);
  
    await result.deleteOne();
  
    return result;
  };

  const checkingCategories = async (id) => {
    const result = await categories.findOne({ _id: id,  });
  
    if (!result) throw new NotFound(`Tidak ada Kategori dengan id :  ${id}`);
  
    return result;
  };

module.exports = {
    getAllCategories,
    createCategories, 
    getOneCategories,
    updateCategories,
    deleteCategories,
    checkingCategories,
};