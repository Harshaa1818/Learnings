

const User = {
    _id,
    username,
    email,
    password
};

const video = {
    _id,
    title,
    owner,
    description
}

// find videos of a particular user 

const VideosOfUser = User.aggregate([{
    $match:{
        _id: req.params.id

    }
},{
    $lookup:{
        from: video,
        localField: _id,
        foreignField: owner,
        as:"VideoOfUser"

    }
},{
    $size:{
        $videoOfUser

    }
}])