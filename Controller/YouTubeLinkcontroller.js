const YouTubeLink = require('../model/YouTubeLinkmodule'); // Adjust the path as necessary

const YouTubeLinkController = {
  // Create or Add New Module, Submodule, or Videos
  createOrUpdate: async (req, res) => {
    try {
      const { moduleName, submoduleName, videos } = req.body;

      // Check if module exists
      let module = await YouTubeLink.findOne({ moduleName });

      if (!module) {
        // Create a new module with a submodule and videos
        module = await YouTubeLink.create({
          moduleName,
          submodules: [{ submoduleName, videos }],
        });
      } else {
        // Check if submodule exists
        const submodule = module.submodules.find(
          (sub) => sub.submoduleName === submoduleName
        );

        if (submodule) {
          // Add videos to the existing submodule
          submodule.videos.push(...videos);
        } else {
          // Add a new submodule
          module.submodules.push({ submoduleName, videos });
        }

        await module.save();
      }

      res.status(201).json({ success: true, data: module });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },

  // Fetch details based on Module Name and Submodule Name
  fetchByModuleAndSubmodule: async (req, res) => {
    try {
      const { moduleName, submoduleName } = req.query;

      const module = await YouTubeLink.findOne({ moduleName });

      if (!module) {
        return res.status(404).json({ success: false, message: 'Module not found' });
      }

      const submodule = module.submodules.find(
        (sub) => sub.submoduleName === submoduleName
      );

      if (!submodule) {
        return res.status(404).json({ success: false, message: 'Submodule not found' });
      }

      res.status(200).json({ success: true, data: submodule });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },

  // Update Module, Submodule, or Videos
  update: async (req, res) => {
    try {
      const { moduleName, submoduleName, videos } = req.body;

      const module = await YouTubeLink.findOne({ moduleName });

      if (!module) {
        return res.status(404).json({ success: false, message: 'Module not found' });
      }

      const submodule = module.submodules.find(
        (sub) => sub.submoduleName === submoduleName
      );

      if (!submodule) {
        return res.status(404).json({ success: false, message: 'Submodule not found' });
      }

      // Replace videos (overwrite existing videos in the submodule)
      submodule.videos = videos;

      await module.save();
      res.status(200).json({ success: true, data: module });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },

  // Delete Module, Submodule, or Videos
  delete: async (req, res) => {
    try {
      const { moduleName, submoduleName, videoURL } = req.body;

      const module = await YouTubeLink.findOne({ moduleName });

      if (!module) {
        return res.status(404).json({ success: false, message: 'Module not found' });
      }

      if (submoduleName) {
        const submodule = module.submodules.find(
          (sub) => sub.submoduleName === submoduleName
        );

        if (!submodule) {
          return res.status(404).json({ success: false, message: 'Submodule not found' });
        }

        if (videoURL) {
          // Remove a specific video
          submodule.videos = submodule.videos.filter(
            (video) => video.videoURL !== videoURL
          );
        } else {
          // Remove the entire submodule
          module.submodules = module.submodules.filter(
            (sub) => sub.submoduleName !== submoduleName
          );
        }
      } else {
        // Remove the entire module
        await YouTubeLink.deleteOne({ moduleName });
        return res.status(200).json({ success: true, message: 'Module deleted' });
      }

      await module.save();
      res.status(200).json({ success: true, data: module });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },
};

module.exports = YouTubeLinkController;
